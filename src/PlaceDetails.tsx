import React from 'react';
import {ScrollView} from 'react-native';

import {PlaceInfoProps} from './types';
import {GOOGLE_API_KEY} from './config';

import {
  Bold,
  Column,
  ImagesContainer,
  InfoText,
  LocationImage,
  ReviewContainer,
  ReviewerPhoto,
  ReviewerText,
  Title,
} from './styles';

const PlaceDetails = ({location}: PlaceInfoProps) => (
  <>
    <Title>{location?.data?.structured_formatting?.main_text}</Title>
    <InfoText>
      <Bold>Endereço: </Bold>
      {location?.details?.formatted_address}
    </InfoText>
    <InfoText>
      <Bold>Latitude: </Bold>
      {location?.details?.geometry?.location?.lat}
    </InfoText>
    <InfoText>
      <Bold>Longitude: </Bold>
      {location?.details?.geometry?.location?.lng}
    </InfoText>
    <InfoText>
      <Bold>Website: </Bold> {location?.details?.website}
    </InfoText>
    <InfoText>
      <Bold>Telefone: </Bold>
      {location?.details?.formatted_phone_number}
    </InfoText>
    <InfoText>
      <Bold>Avaliação: </Bold> {location?.details?.rating} (
      {location?.details?.user_ratings_total} avaliações)
    </InfoText>
    <ImagesContainer horizontal>
      {location?.details?.photos &&
        location?.details?.photos.map((photo: any) => (
          <LocationImage
            key={photo.photo_reference}
            source={{
              uri:
                'https://maps.googleapis.com/maps/api/place/photo?' +
                'maxwidth=200' +
                `&photoreference=${photo.photo_reference}` +
                `&key=${GOOGLE_API_KEY}`,
              width: 50,
            }}
          />
        ))}
    </ImagesContainer>

    <ScrollView>
      {location?.details?.reviews &&
        location?.details?.reviews.map((review: any) => (
          <ReviewContainer key={review.author_name}>
            <ReviewerPhoto
              source={{
                uri: review.profile_photo_url,
                width: 50,
                height: 50,
              }}
            />
            <Column>
              <Bold>
                {review.author_name} (Nota: {review.rating})
              </Bold>
              <ReviewerText>{review.text}</ReviewerText>
            </Column>
          </ReviewContainer>
        ))}
    </ScrollView>
  </>
);

export default PlaceDetails;
