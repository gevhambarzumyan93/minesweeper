import React from 'react';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import axios from '../../axios';
import { notification } from 'antd';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorInfo: {} };
  }

  UNSAFE_componentWillMount() {
    let method = 'get';
    let notifyResult = true;
    this.reqInterceptor = axios.interceptors.request.use((config) => {
      method = config.method;
      notifyResult = config.notifyResult;
      return config;
    });
    this.resInterceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const errorMetaData =
          error.response && error.response.config
            ? {
                url: error.response.config.url,
                method: error.response.config.method,
                params: error.response.config.params,
                message: get(error, 'response.data.message'),
                data: error.response.config.data,
                statusCode: get(error, 'response.status', '404'),
              }
            : {};

        // const {
        //   response,
        //   config: { handler = true },
        // } = error;
        // const { data } = response || {};
        // const { message: responseMessage } = data || {};
        // let { message } = error;
        // if (responseMessage) {
        //   message = responseMessage;
        // }
        this.setState({
          errorInfo: errorMetaData,
        });
        // if (response.status === 403) {
        //   this.setState({ error: error });
        // } else {
        //   notification.error({
        //     message: errorInfoData.message || 'Something went wrong',
        //   });
        // }

        if ([400].includes(statusCode)) {
          notification.error({
            message,
          });
        }
        throw error;
      }
    );
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  componentWillUnmount() {
    axios.interceptors.request.eject(this.reqInterceptor);
    axios.interceptors.response.eject(this.resInterceptor);
  }

  render() {
    const { statusCode, ...errorInfoData } = this.state.errorInfo;
    if (!isEmpty(errorInfoData) && ![400].includes(statusCode)) {
      // Error path
      return (
        <div>
          <Typography component='h1' variant='h1' className='errorTitle'>
            OOPS.
          </Typography>
          <Typography component='h3' variant='h3' className='errorText'>
            Looks like it’s an error.
          </Typography>
          <a href='/' className='errorButton'>
            Go back to homepage
          </a>
        </div>
      );
    }
    // Normally, just render children
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
