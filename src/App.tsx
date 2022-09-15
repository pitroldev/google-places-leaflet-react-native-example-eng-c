import React, {useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import useBackHandler from './hooks/useBackHandler';
import {LocationInfo} from './types';

import {GOOGLE_API_KEY} from './config';

import PlaceInfo from './PlaceInfo';

import {Container} from './styles';

const App = () => {
  const [locationInfo, setLocationInfo] = useState<LocationInfo>(null);

  useBackHandler(() => setLocationInfo(null));

  const isAnyLocationSelected = Boolean(locationInfo);
  if (isAnyLocationSelected) {
    return <PlaceInfo location={locationInfo} />;
  }

  return (
    <Container>
      <GooglePlacesAutocomplete
        placeholder="Pesquisar"
        fetchDetails
        onPress={(data, details = null) => setLocationInfo({data, details})}
        query={{
          key: GOOGLE_API_KEY,
          language: 'pt-br',
        }}
      />
    </Container>
  );
};

export default App;
