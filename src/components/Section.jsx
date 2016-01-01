export default class Section extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  render () {
    return (
      <section className='tech' style={{textAlign: 'center'}}>
        {this.props.children}
      </section>
    );
  }
}
