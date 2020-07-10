import React, {Component} from 'react';
import {View, Text, SafeAreaView, Linking} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

class EnquiryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let temp = this.props.items;
    console.log(temp);
    return (
      <SafeAreaView style={{backgroundColor: '#fbfbfc'}}>
        <View style={styles.enquiryItemCointainer}>
          <Text style={styles.newEnquiry}>New Enquiry</Text>
          <View>
            <View style={styles.textBgColor}>
              <Text style={styles.basicInfo}>{temp.name}</Text>
            </View>
            <View style={styles.textBgColor}>
              <Text>{temp.categoryName} </Text>
            </View>

            <View style={styles.row}>
              <View style={styles.textBgColor}>
                <Text>{temp.postedOn}</Text>
              </View>
              <View style={styles.textBgColor}>
                <Text>{temp.location}</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.textBgColor}>
              <Text>Class Preference - {temp.classLocPref}</Text>
            </View>
            <View style={styles.textBgColor}>
              <Text>
                Provider Type - {temp.providerType}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('tel:' + temp.phoneNumber);
              }}
              style={styles.callButton}>
              <Text style={{color: 'white'}}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.item_details,
  };
};
export default connect(mapStateToProps, null)(EnquiryDetail);
