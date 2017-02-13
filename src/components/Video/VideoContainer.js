import { connect } from 'react-redux'
import Video from './Video'

const mapStateToProps = (state) => ({
  	video: state.video
})

export default connect(mapStateToProps)(Video)
