import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper'

export default function Footer() {

  const theme = useTheme()

  const navigation = useNavigation()

  return (
    <View style={[styles.footerContent, { backgroundColor: theme.colors.primary }]}>
      
      <TouchableOpacity onPress={() => navigation.navigate("Lists")}>
       <View style={styles.iconContainer}>
         <Icon name="filter-list" size={30} color="#9DB2CE" style={styles.footerIcons} />
         <Text style={styles.iconText}>Listat</Text>
       </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Currency")}>
        <View style={styles.iconContainer}>
          <Icon name="euro" size={30} color="#9DB2CE" style={styles.footerIcons} />
          <Text style={styles.iconText}>Valuutta</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
       <View style={styles.circleIconContainer}>
         <Icon name="add-circle" size={70} color="#613EEA" style={styles.circleIcon} />
       </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Weather")}>
        <View style={styles.iconContainer}>
          <Icon name="sunny" size={30} color="#9DB2CE" style={styles.footerIcons} />
          <Text style={styles.iconText}>Sää</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
       <View style={styles.iconContainer}>
         <Icon name="person" size={30} color="#9DB2CE" style={styles.footerIcons} />
         <Text style={styles.iconText}>Asetukset</Text>
       </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  iconText: {
    fontSize: 12,
    color: '#9DB2CE',
  },
  footerIcons: {
    marginHorizontal: 10,
  },
  circleIconContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -30 }],
    padding: 5,
  },
  iconContainer: {
    alignItems: 'center',
  },
})