import React, {Component} from 'react';
import {View, SafeAreaView, SectionList, Text, Linking} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar, Icon} from 'react-native-elements';
import moment from 'moment';
import {styles} from './styles';
import { connect } from 'react-redux';
import { GetEnquiryDetail } from '../actions';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {enquiryList: {}};
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5c41920e0f0000543fe7b889', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        this.setState({
          enquiryList: result,
        });
      })
      .catch((error) => {
        this.setState({error});
      });
  }

  handleNavigation(item) {
    this.props.addItemDetails(item) ;
    this.props.navigation.navigate('EnquiryDetail');
  }

  renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => this.handleNavigation(item)}
      style={{borderTopWidth: index ? 2 : 0 , borderColor :'lightgrey'}}>
      <View style={styles.container}>
        <Avatar
          rounded
          title={item.name[0]}
          activeOpacity={0.9}
          size={30}
          overlayContainerStyle={{
            backgroundColor: index % 2 ? '#ce3a4d' : '#87ceeb',
            flex: 1,
          }}
          containerStyle={styles.avatarItem}
        />
        <View style={styles.item}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.line}>{item.categoryName}</Text>
          <Text style={styles.line}>{item.location}</Text>
          <Text style={styles.line}>At {item.classLocPref}</Text>
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.timeStamp}>
            {moment(item.postedOn, 'DD/MM/YYYY', true).isValid() &&
              moment(item.postedOn).fromNow()}
          </Text>
          <Icon
            style={styles.contact}
            size={20}
            name="smartphone"
            type="feather"
            color={index % 2 ? '#ce3a4d' : '#87ceeb'}
            onPress={() => Linking.openURL('tel:' + item.phoneNumber)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView>
        {this.state.enquiryList ? (
          <FlatList
            data={this.state.enquiryList.dataList}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : null}
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemDetails: data => {
      dispatch(GetEnquiryDetail(data));
    },
  };
};

export default connect(null , mapDispatchToProps) (HomeScreen);
