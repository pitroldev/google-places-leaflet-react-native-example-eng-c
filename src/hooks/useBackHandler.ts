import {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useBackHandler = (callback: Function, preventDefault = true) => {
  useEffect(() => {
    const backHandler = () => {
      callback();
      return preventDefault;
    };

    BackHandler.addEventListener('hardwareBackPress', backHandler);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, [callback, preventDefault]);
};

export default useBackHandler;
