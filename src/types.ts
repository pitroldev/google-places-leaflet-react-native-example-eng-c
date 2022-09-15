import {GooglePlaceData} from 'react-native-google-places-autocomplete';

export type LocationInfo = {
  data: GooglePlaceData;
  details: any;
} | null;

export type PlaceInfoProps = {
  location: LocationInfo;
};
