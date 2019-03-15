/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var urlParams = new URLSearchParams(window.location.search);
var apiKey = urlParams.get('apiKey');
var authDomain = urlParams.get('authDomain');
var databaseURL = urlParams.get('databaseURL');
var storageBucket = urlParams.get('storageBucket');
var clientId = urlParams.get('clientId');

if (!apiKey && !authDomain && !databaseURL && !storageBucket && !clientId) {
  var errorMsg = 'Faltan configuraciones para que funcione este script, verifique la url';
  alert(errorMsg)
  console.log(errorMsg);
}

var config = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  storageBucket: storageBucket,
};
firebase.initializeApp(config);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID =  clientId;

