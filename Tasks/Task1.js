import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Box from "../componants/Box"

export default function Task1() {
  const COLORS=[
    {colorName:'Base03',hexCode:'#002b36'},
    {colorName:'Base02',hexCode:'#073642'},
    {colorName:'Base01',hexCode:'#586e75'},
    {colorName:'Base00',hexCode:'#657b83'},
    {colorName:'Base0',hexCode:'#839496'},
    {colorName:'Base1',hexCode:'#93a1a1'},
    {colorName:'Base2',hexCode:'#eee8d5'},
    {colorName:'Base3',hexCode:'#fdf6e3'},
    {colorName:'Yellow',hexCode:'#b58900'},
    {colorName:'Orange',hexCode:'#cb4b16'},
    {colorName:'Red',hexCode:'#dc322f'},
    {colorName:'Magenta',hexCode:'#d33682'},
    {colorName:'Cyan',hexCode:'#2aa198'},
    {colorName:'Green',hexCode:'#859900'},
    ]

    return (
      
        <ScrollView >
          <Text style={styles.text}>Here are some boxes of different colors</Text>
          {COLORS.map(obj=><Box key={obj.hexCode} {...obj}></Box>)}
        </ScrollView>

    );
}



const styles = StyleSheet.create({
  text:{
    fontWeight:"bold",
    fontSize:18,
    marginHorizontal:13,
    marginTop:50
  } ,
})



