import { StyleSheet,Dimensions, Platform } from "react-native";
import { colors, sizes, fonts } from "../../constants/them";
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    // app styles 
    container: { flex:1, alignItems: 'center', },
    containerCenter: { justifyContent: 'flex-start', flexDirection:'row', alignItems:'center'},
    appContainer: { flex:1, justifyContent:'center', alignItems: 'center', },
    appMapContainer: {  ...StyleSheet.absoluteFillObject, flex: 1, justifyContent: "flex-end",alignItems: "center", marginBottom: 8 },  
});
 
export default styles;