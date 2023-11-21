import * as React from "react"
import { Path, Svg, SvgUri } from "react-native-svg"

import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    margin:0,
  },
});
const Waves = (props) => (
    <Svg style={styles.container}>
      <Path 
      fill="#0099ff"
      
      fillOpacity="1"
      d="M0,32L120,74.7C240,117,480,203,720,229.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />

    </Svg>
    )
export default Waves