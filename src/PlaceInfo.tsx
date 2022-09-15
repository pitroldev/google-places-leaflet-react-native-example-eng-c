import React, {useState} from 'react';
import {LeafletView} from 'react-native-leaflet-view';

import {PlaceInfoProps} from './types';

import PlaceDetails from './PlaceDetails';
import Navbar from './Navbar';
import {Container} from './styles';

const PlaceInfo = ({location}: PlaceInfoProps) => {
  const [selectedTab, setSelectedTab] = useState('detail');

  if (selectedTab === 'map') {
    return (
      <Container>
        <Navbar onPress={setSelectedTab} />
        <LeafletView
          mapCenterPosition={{
            lat: location?.details?.geometry?.location?.lat,
            lng: location?.details?.geometry?.location?.lng,
          }}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Navbar onPress={setSelectedTab} />
      <PlaceDetails location={location} />
    </Container>
  );
};

export default PlaceInfo;
