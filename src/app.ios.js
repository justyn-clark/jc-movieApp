/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';

import { iconsMap, iconsLoaded } from './utils/AppIcons';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: true
};

class App extends Component {
	constructor(props) {
		super(props);
		iconsLoaded.then(() => {
			this.startApp();
		});
	}

	startApp() {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'Feed',
					screen: 'movieapp.Movies',
					icon: iconsMap['ios-list-box-outline'],
					selectedIcon: iconsMap['ios-list-box-outline'],
					title: 'FEED',
					navigatorStyle,
					navigatorButtons: {
						rightButtons: [
							{
								title: 'SEARCH',
								id: 'search',
								icon: iconsMap['ios-search']
							}
						],
            leftButtons: [
              {
                title: 'SEARCH',
                id: 'search',
                icon: iconsMap['ios-search']
              }
            ]
					}
				},
        {
          label: 'Squads',
          screen: 'movieapp.Movies',
          icon: iconsMap['ios-people-outline'],
          selectedIcon: iconsMap['ios-people'],
          title: 'SQUADS',
          navigatorStyle,
          navigatorButtons: {
            rightButtons: [
              {
                title: 'SEARCH',
                id: 'search',
                icon: iconsMap['ios-search']
              }
            ]
          }
        },
        {
          label: 'Home',
          screen: 'movieapp.Movies',
          icon: iconsMap['ios-home-outline'],
          selectedIcon: iconsMap['ios-home'],
          title: 'HOME',
          navigatorStyle,
          navigatorButtons: {
            rightButtons: [
              {
                title: 'SEARCH',
                id: 'search',
                icon: iconsMap['ios-search']
              }
            ],
            leftButtons: [
              {
                title: 'SEARCH',
                id: 'search',
                icon: iconsMap['ios-search']
              }
            ]
          }
        },
        {
          label: 'IQ',
          screen: 'movieapp.Movies',
          icon: iconsMap['ios-bulb-outline'],
          selectedIcon: iconsMap['ios-bulb'],
          title: 'IQ',
          navigatorStyle,
          navigatorButtons: {
            rightButtons: [
              {
                title: 'SEARCH',
                id: 'search',
                icon: iconsMap['ios-search']
              }
            ]
          }
        },
				{
					label: 'Player',
					screen: 'movieapp.Movies',
					icon: iconsMap['ios-person-outline'],
					selectedIcon: iconsMap['ios-person'],
					title: 'PLAYER',
					navigatorStyle
				}
			],
			tabsStyle: {
				tabBarButtonColor: 'white',
				tabBarSelectedButtonColor: 'white',
				tabBarBackgroundColor: 'black',
        initialTabIndex: 2
			}
		});
	}
}

export default App;
