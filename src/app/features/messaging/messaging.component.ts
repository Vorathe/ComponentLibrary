import { Component } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import * as moment from 'moment';

@Component({
  selector: 'my-messaging',
  templateUrl: 'messaging.component.html',
  styleUrls: ['messaging.component.scss']
})
export class MessagingComponent {

  public position: string = 'bottom-right';
  public positions: Array<any> = [
    { value: 'bottom-right', display: 'Bottom right' },
    { value: 'bottom-left', display: 'Bottom left' },
    { value: 'bottom-center', display: 'Bottom center' },
    { value: 'top-right', display: 'Top right' },
    { value: 'top-left', display: 'Top left' },
    { value: 'top-center', display: 'Top center' },
    { value: 'center-center', display: 'Center center'}
  ];
  public notifications: Array<any> = [];

  constructor(private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'default';
  }

  addInfoToast() {
    let toastOptions: ToastOptions = {
      title: 'Information',
      msg: 'Information message',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        let time = moment().calendar();
        this.notifications.push({
          title: toast.title,
          msg: toast.msg,
          time: time,
          type: toast.type
        });
      }
      // ,onRemove: function(toast: ToastData) {
      // }
    };

    this.toastyService.info(toastOptions);
  }

  addLoadingToast() {
    let toastOptions: ToastOptions = {
      title: 'Loading',
      msg: 'Loading message',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        let time = moment().calendar();
        this.notifications.push({
          title: toast.title,
          msg: toast.msg,
          time: time,
          type: toast.type
        });
      }
      // ,onRemove: function(toast: ToastData) {
      // }
    };

    this.toastyService.wait(toastOptions);
  }

  addSuccessToast() {
    let toastOptions: ToastOptions = {
      title: 'Success',
      msg: 'Success message',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        let time = moment().calendar();
        this.notifications.push({
          title: toast.title,
          msg: toast.msg,
          time: time,
          type: toast.type
        });
      }// ,onRemove: function(toast: ToastData) {
      // }
    };

    this.toastyService.success(toastOptions);
  }

  addWarningToast() {
    let toastOptions: ToastOptions = {
      title: 'Warning',
      msg: 'Warning message',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        let time = moment().calendar();
        this.notifications.push({
          title: toast.title,
          msg: toast.msg,
          time: time,
          type: toast.type
        });
      }// ,onRemove: function(toast: ToastData) {
      // }
    };

    this.toastyService.warning(toastOptions);
  }

  addErrorToast() {
    let toastOptions: ToastOptions = {
      title: 'Error',
      msg: 'Error message',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        let time = moment().calendar();
        this.notifications.push({
          title: toast.title,
          msg: toast.msg,
          time: time,
          type: toast.type
        });
      }// ,onRemove: function(toast: ToastData) {
      // }
    };

    this.toastyService.error(toastOptions);
  }

  removeNotification(index) {
    this.notifications.splice(index, 1);
  }
}
