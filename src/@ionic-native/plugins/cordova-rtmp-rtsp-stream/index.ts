/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name cordova-rtmp-rtsp-stream
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { cordova-rtmp-rtsp-stream } from '@ionic-native/cordova-rtmp-rtsp-stream';
 *
 *
 * constructor(private cordova-rtmp-rtsp-stream: cordova-rtmp-rtsp-stream) { }
 *
 * ...
 *
 *
 * this.cordova-rtmp-rtsp-stream.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'VideoStream',
  plugin: 'cordova-rtmp-rtsp-stream', // npm package name, example: cordova-plugin-camera
  pluginRef: 'videoStreamer', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class VideoStream extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  streamRTSP (uri: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  @Cordova()
  streamRTMP (uri: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  @Cordova()
 streamRTMPAuth (uri: string ,usr:string,pass:string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  @Cordova()
  streamStop (): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  @Cordova()
  commentList (comments:any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  @Cordova()
  commentListShow  (isShow:boolean): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  @Cordova()
  videoRecord  (): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }



}
