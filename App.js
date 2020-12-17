import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';

export default function App() {
  //This didn't work
  let [fontsLoaded] = useFonts({ Kanit_400Regular });

  if (!fontsLoaded) {
    console.log('Font not loaded');
  }

  const [searchMade, setSearchMade] = useState(false);

  const [playerfName, setPlayerfName] = useState('');
  const [playerlName, setPlayerlName] = useState('');
  const [innerSearchPlayer, setInnerSearchPlayer] = useState('');
  const [innerSearchSeason, setInnerSearchSeason] = useState('');
  const [playerStats, setPlayerStats] = useState('');

  const [p1pointsStyle, setp1pointsStyle] = useState('');
  const [p1reboundsStyle, setp1reboundsStyle] = useState('');
  const [p1assistsStyle, setp1assistsStyle] = useState('');
  const [p1blocksStyle, setp1blocksStyle] = useState('');
  const [p1stealsStyle, setp1stealsStyle] = useState('');

  const [player2fName, setPlayer2fName] = useState('');
  const [player2lName, setPlayer2lName] = useState('');
  const [innerSearchPlayer2, setInnerSearchPlayer2] = useState('');
  const [innerSearchSeason2, setInnerSearchSeason2] = useState('');
  const [player2Stats, setPlayer2Stats] = useState('');
  const [search2Made, setSearch2Made] = useState(false);

  const [p2pointsStyle, setp2pointsStyle] = useState('');
  const [p2reboundsStyle, setp2reboundsStyle] = useState('');
  const [p2assistsStyle, setp2assistsStyle] = useState('');
  const [p2blocksStyle, setp2blocksStyle] = useState('');
  const [p2stealsStyle, setp2stealsStyle] = useState('');

  const [searching1, setSearching1] = useState(true);
  const [searching2, setSearching2] = useState(false);

  const title = (
    <Text style={styles.title}>NBA STAT CHECK</Text>
  );

  const launchPage = (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Player Name"
        placeholderTextColor="#a8b8c5"
        value={innerSearchPlayer}
        onChangeText={(e) => setInnerSearchPlayer(e)}></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Season (2019 for 19/20)"
        placeholderTextColor="#a8b8c5"
        value={innerSearchSeason}
        onChangeText={(e) => setInnerSearchSeason(e)}></TextInput>
    </View>
  );

  const launchPageSearchButton = (
    <TouchableHighlight
      style={styles.searchTouchable}
      onPress={(e) => searchPlayer(innerSearchPlayer, 1)}>
      <View style={styles.searchButton}>
        <Text style={styles.searchText}>SEARCH</Text>
      </View>
    </TouchableHighlight>
  );

  const player2Search = (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Player Name"
        placeholderTextColor="#a8b8c5"
        value={innerSearchPlayer2}
        onChangeText={(e) => setInnerSearchPlayer2(e)}></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Season (2019 for 19/20)"
        placeholderTextColor="#a8b8c5"
        value={innerSearchSeason2}
        onChangeText={(e) => setInnerSearchSeason2(e)}></TextInput>
    </View>
  );

  const player2SearchButton = (
    <TouchableHighlight
      style={styles.searchTouchable}
      onPress={(e) => searchPlayer(innerSearchPlayer2, 2)}>
      <View style={styles.searchButton}>
        <Text style={styles.searchText}>SEARCH</Text>
      </View>
    </TouchableHighlight>
  );

  const player1Values = (
    <View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableHighlight
          style={styles.searchTouchable}
          onPress={() => setSearching1(true)}>
          <View style={styles.searchAgainButton}>
            <Image
              source={{
                uri:
                  'https://www.cambodianexpress.com/giant_content/uploads/2019/07/search_icon.png',
              }}
              style={styles.searchAgainSymbol}
            />
          </View>
        </TouchableHighlight>

        <View>
          <Text style={styles.nameStyle}>{playerfName}</Text>
          <Text style={styles.nameStyle}>{playerlName}</Text>
          <Text style={styles.seasonStyle}>{innerSearchSeason}</Text>
          <Text style={styles.neutral}>{playerStats.pts} ppg</Text>
          <Text style={styles.neutral}>{playerStats.reb} rpg</Text>
          <Text style={styles.neutral}>{playerStats.ast} apg</Text>
          <Text style={styles.neutral}>{playerStats.blk} bpg</Text>
          <Text style={styles.neutral}>{playerStats.stl} spg</Text>
        </View>

        <TouchableHighlight
          style={styles.searchTouchable}
          onPress={(e) => setSearching2(true)}>
          <View style={styles.searchAgainButton}>
            <Image
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/abstract-1/512/compare-512.png',
              }}
              style={styles.compareButtonSymbol}
            />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );

  const bothPlayerValues = (
    <View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{paddingRight: 7}}>
          <TouchableHighlight
            style={styles.searchTouchable}
            onPress={() => setSearching1(true)}>
            <View style={styles.searchAgainButton}>
              <Image
                source={{
                  uri:
                    'https://www.cambodianexpress.com/giant_content/uploads/2019/07/search_icon.png',
                }}
                style={styles.searchAgainSymbol}
              />
            </View>
          </TouchableHighlight>

          <Text style={styles.nameStyle}>{playerfName}</Text>
          <Text style={styles.nameStyle}>{playerlName}</Text>
          <Text style={styles.seasonStyle}>{innerSearchSeason}</Text>
          <Text
            style={p1pointsStyle === 'better' ? styles.higher : styles.neutral}>
            {playerStats.pts} ppg
          </Text>
          <Text
            style={
              p1reboundsStyle === 'better' ? styles.higher : styles.neutral
            }>
            {playerStats.reb} rpg
          </Text>
          <Text
            style={
              p1assistsStyle === 'better' ? styles.higher : styles.neutral
            }>
            {playerStats.ast} apg
          </Text>
          <Text
            style={
              p1reboundsStyle === 'better' ? styles.higher : styles.neutral
            }>
            {playerStats.blk} bpg
          </Text>
          <Text
            style={p1stealsStyle === 'better' ? styles.higher : styles.neutral}>
            {playerStats.stl} spg
          </Text>
        </View>

        <View style={{paddingLeft: 7}}>
          <TouchableHighlight
            style={styles.searchTouchable}
            onPress={(e) => setSearching2(true)}>
            <View style={styles.searchAgainButton}>
              <Image
                source={{
                  uri:
                    'https://www.cambodianexpress.com/giant_content/uploads/2019/07/search_icon.png',
                }}
                style={styles.searchAgainSymbol}
              />
            </View>
          </TouchableHighlight>

          <Text style={styles.nameStyle}>{player2fName}</Text>
          <Text style={styles.nameStyle}>{player2lName}</Text>
          <Text style={styles.seasonStyle}>{innerSearchSeason2}</Text>
          <Text
            style={p2pointsStyle === 'better' ? styles.higher : styles.neutral}>
            {player2Stats.pts} ppg
          </Text>
          <Text
            style={
              p2reboundsStyle === 'better' ? styles.higher : styles.neutral
            }>
            {player2Stats.reb} rpg
          </Text>
          <Text
            style={
              p2assistsStyle === 'better' ? styles.higher : styles.neutral
            }>
            {player2Stats.ast} apg
          </Text>
          <Text
            style={p2blocksStyle === 'better' ? styles.higher : styles.neutral}>
            {player2Stats.blk} bpg
          </Text>
          <Text
            style={p2stealsStyle === 'better' ? styles.higher : styles.neutral}>
            {player2Stats.stl} spg
          </Text>
        </View>
      </View>
    </View>
  );

  function searchPlayer(input, number) {
    //adds underscores for hyphens as per the API request documentation
    const replace = input.split(' ').join('_');

    const url = `https://www.balldontlie.io/api/v1/players?search=${replace}`;

    //Relevant for second player search

    if (number === 1) {
      setSearchMade(true);
    } else if (number === 2) {
      setSearch2Made(true);
    }

    fetch(url)
      .then((res) => res.json())
      .then(async (res) => {
        if (res.data[0] === undefined) {
          alert(
            "This player didn't play in the season specified or is not in the database"
          );
        } else if (res.data.length > 1) {
          alert('Please specify the name more');
        } else {
          if (number === 1) {
            getPlayerStats(res.data[0].id, number);
            setPlayerfName(res.data[0].first_name);
            setPlayerlName(res.data[0].last_name);
          } else if (number === 2) {
            getPlayerStats(res.data[0].id, number);
            setPlayer2fName(res.data[0].first_name);
            setPlayer2lName(res.data[0].last_name);
          }
        }
      });
  }

  function getPlayerStats(input, number) {
    let url = '';

    if (number === 1) {
      url = `https://www.balldontlie.io/api/v1/season_averages?season=${innerSearchSeason}&player_ids[]=${input}`;
    } else if (number === 2) {
      url = `https://www.balldontlie.io/api/v1/season_averages?season=${innerSearchSeason2}&player_ids[]=${input}`;
    }

    if (
      url ===
      `https://www.balldontlie.io/api/v1/season_averages?season=&player_ids[]=${input}`
    ) {
      alert('Please specify the season');
    } else {
      fetch(url)
        .then((res) => res.json())
        .then(async (res) => {
          if (res.data[0] === undefined) {
            alert(
              "This player didn't play in the season specified or is not in the database"
            );
          } else {
            if (number === 1) {
              setPlayerStats(res.data[0]);
              setSearching1(false);
              compareStats(res.data[0]);
            } else if (number === 2) {
              setPlayer2Stats(res.data[0]);
              setSearching2(false);
              compare2Stats(res.data[0]);
            }
          }
        });
    }
  }

  function compareStats(input) {
    //Compare points
    if (player2Stats.pts < input.pts) {
      setp1pointsStyle('better');
      setp2pointsStyle('neutral');
    } else if (player2Stats.pts > input.pts) {
      setp2pointsStyle('better');
      setp1pointsStyle('neutral');
    }

    //Compare rebounds
    if (player2Stats.reb < input.reb) {
      setp1reboundsStyle('better');
      setp2reboundsStyle('neutral');
    } else if (player2Stats.reb > input.reb) {
      setp2reboundsStyle('better');
      setp1reboundsStyle('neutral');
    }

    //Compare assists
    if (player2Stats.ast < input.ast) {
      setp1assistsStyle('better');
      setp2assistsStyle('neutral');
    } else if (player2Stats.ast > input.ast) {
      setp2assistsStyle('better');
      setp1assistsStyle('neutral');
    }

    //Compare blocks
    if (player2Stats.blk < input.blk) {
      setp1blocksStyle('better');
      setp2blocksStyle('neutral');
    } else if (player2Stats.blk > input.blk) {
      setp2blocksStyle('better');
      setp1blocksStyle('neutral');
    }

    //Compare steals
    if (player2Stats.stl < input.stl) {
      setp1stealsStyle('better');
      setp2stealsStyle('neutral');
    } else if (player2Stats.stl > input.stl) {
      setp2stealsStyle('better');
      setp1stealsStyle('neutral');
    }
  }

  function compare2Stats(input) {
    //Compare points
    if (playerStats.pts > input.pts) {
      setp1pointsStyle('better');
      setp2pointsStyle('neutral');
    } else if (playerStats.pts < input.pts) {
      setp2pointsStyle('better');
      setp1pointsStyle('neutral');
    }

    //Compare rebounds
    if (playerStats.reb > input.reb) {
      setp1reboundsStyle('better');
      setp2reboundsStyle('neutral');
    } else if (playerStats.reb < input.reb) {
      setp2reboundsStyle('better');
      setp1reboundsStyle('neutral');
    }

    //Compare assists
    if (playerStats.ast > input.ast) {
      setp1assistsStyle('better');
      setp2assistsStyle('neutral');
    } else if (playerStats.ast < input.ast) {
      setp2assistsStyle('better');
      setp1assistsStyle('neutral');
    }

    //Compare blocks
    if (playerStats.blk > input.blk) {
      setp1blocksStyle('better');
      setp2blocksStyle('neutral');
    } else if (playerStats.blk < input.blk) {
      setp2blocksStyle('better');
      setp1blocksStyle('neutral');
    }

    //Compare steals
    if (playerStats.stl > input.stl) {
      setp1stealsStyle('better');
      setp2stealsStyle('neutral');
    } else if (playerStats.stl < input.stl) {
      setp2stealsStyle('better');
      setp1stealsStyle('neutral');
    }
  }

  return (
    <ImageBackground
      source={{
        uri:
          'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=749&q=80',
      }}
      style={styles.background}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.87)', 'rgba(0, 0, 0, 0.87)']}
        style={styles.background}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>

            {searching2
              ? [title, player2Search, player2SearchButton] 
              : searching1
              ? [title, launchPage, launchPageSearchButton]
              : search2Made
              ? [title, bothPlayerValues]
              : [title, player1Values]
              }

              
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  compareButtonSymbol: {
    width: 23,
    height: 23,
    left: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    top: 100,
    alignItems: 'center',
  },

  searchAgainButton: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 90,
    justifyContent: 'center',
  },

  searchAgainSymbol: {
    width: 23,
    height: 23,
    left: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchButton: {
    backgroundColor: 'white',
    width: 100,
    height: 30,
    borderRadius: 90,
    justifyContent: 'center',
  },

  searchText: {
    textAlign: 'center',
    color: 'black',
  },

  searchTouchable: {
    alignItems: 'center',
    padding: 10,
  },

  neutral: {
    color: 'white',
    textAlign: 'center',
    padding: 3
  },

  nameStyle: {
    color: 'white',
    textAlign: 'center',
    padding: 1,
    fontSize: 18
  },

  seasonStyle: {
    color: 'white',
    textAlign: 'center',
    padding: 4,
    fontSize: 13
  },

  higher: {
    color: '#00ff04',
    textAlign: 'center',
     padding: 3
  },

  textInput: {
    color: 'white',
    fontFamily: '"Kanit_400Regular", Helvetica',
    fontSize: 15,
    textAlign: 'center',
    padding: 4,
  },

  title: {
    color: 'white',
    fontFamily: '"Kanit_400Regular", Helvetica',
    fontSize: 30,
    paddingBottom: 10
  },
});
