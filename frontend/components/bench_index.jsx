import React from 'react';
import BenchIndexItem from './bench_index_item.jsx';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.requestBenches();
  }

  render() {
    const benchLines = [];

    for (let key in this.props.benches) {

      benchLines.push(<BenchIndexItem key={key} bench={this.props.benches[key]} /> );
    }

    return(
      <section>BenchIndex
        <ul>
          {benchLines}
        </ul>
      </section>
    );
  }
}

export default BenchIndex;
