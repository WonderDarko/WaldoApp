// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: {
    api: 'https://pokeapi.co/api/v2/',
    pokemon: {
      id: 'pokemon/_id_',
      name: 'pokemon/_name_'
    },
    type: {
      id: 'type/_id_'
    },
    ability: {
      id: 'ability/_id_'
    }
  },

  endpointSW: {
    api: 'https://swapi.dev/api/',
    person: {
      id: 'people/_id_/',
    }
  },

  firebaseConfig: {
    apiKey: "AIzaSyA0fTYEbGJer9L9YX3i_Xhv1wvKYzuHNuI",
    authDomain: "ionicnodemcu-73836.firebaseapp.com",
    databaseURL: "https://ionicnodemcu-73836-default-rtdb.firebaseio.com",
    projectId: "ionicnodemcu-73836",
    storageBucket: "ionicnodemcu-73836.appspot.com",
    messagingSenderId: "247326552624",
    appId: "1:247326552624:web:61fa2bbf8b43216c8873f5",
    measurementId: "G-BXYG4B5K51"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
