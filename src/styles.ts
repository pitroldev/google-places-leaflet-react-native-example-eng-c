import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: flex-start;
  padding: 0 5px;
`;

export const InputContainer = styled.View`
  margin: 10px 0;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 20px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const ReviewerText = styled.Text`
  font-size: 14px;
  word-break: break-all;
  color: #333;
  margin-top: 5px;
`;

export const ImagesContainer = styled.ScrollView`
  padding: 0 5px;
  height: 250px;
  margin-top: 10px;
`;

export const LocationImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 10px;
`;

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ReviewContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

export const ReviewerPhoto = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;
