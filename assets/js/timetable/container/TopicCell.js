// @flow
import { connect } from 'react-redux';
import TopicCell from '../component/TopicCell';
import type { State } from '../../reducers';

type Props = {
  id: string,
  col: number,
  row?: number,
}

function mapStateToProps(state: State, ownProps: Props) {
  const topics = state.timetable.topics.topics;
  return {
    topic: topics.find(topic => topic.id === ownProps.id),
    col: ownProps.col,
    rol: ownProps.row || 0,
  };
}

export default connect(mapStateToProps)(TopicCell);
