import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  item: {
    flex: 3,
    lineHeight: 3,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  row: {flexDirection: 'row', justifyContent: 'space-between' , flexWrap : 'wrap'},
  itemInfo: {
    flex: 1,
    alignItems: 'center',
  },
  contact: {
    margin: 10,
  },
  avatarItem: {
    marginLeft: 10,
    marginRight: 10,
  },
  timeStamp: {
    color: 'grey',
    fontSize: 10,
    fontWeight: 'bold',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0b0b0b',
    lineHeight: 20,
  },
  line: {
    lineHeight: 20,
  },
  enquiryItemCointainer: {
    margin: 20,
    height: height,
    display: 'flex',
    flexDirection: 'column',
  },
  newEnquiry: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  basicInfo: {
    padding: 6,
    borderRadius: 10,
  },
  textBgColor: {
    display: 'flex',
    marginBottom: 10,
    backgroundColor: '#e4f2f7',
    borderRadius: 20,
    borderWidth: 10,
    borderColor: 'transparent',
    padding: 10,
  },
  callButton: {
    backgroundColor: '#ce3a4d',
    padding: 20,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
});
