const presentations = [
  {
    title: 'LNUG',
    subtitle: 'February 2015',
    youtubeId: 'cQOPoDmkFg8'
  },
  {
    title: 'Container Camp',
    subtitle: 'September 2014',
    youtubeId: 'Zve7rJ1FoDU'
  }
];

const YoutubeEmbed = React.createClass({
  render() {
    const url = `https://www.youtube.com/embed/${this.props.id}?modestbranding=1&autohide=1&showinfo=0&controls=1`
    return (
      <iframe src={url} frameBorder="0" allowFullScreen></iframe>
    )
  }
});

const MenuItem = React.createClass({
  onClick() {
    this.props.onClick(this.props.item.youtubeId);
  },
  render() {
    var classList = 'clearfix p2 mxn2 mb1 rounded border'
    if (this.props.active) {
      classList += ' bg-white-translucent border-white';
    } else {
      classList += ' border-transparent'
    }
    return (
      <div className={classList} onClick={this.onClick}>
        <div className="left mr2">
          <YoutubeThumbnail id={this.props.item.youtubeId}/>
        </div>
        <div className="overflow-hidden">
          <p className="bold mb0">{this.props.item.title}</p>
          <p className="mb0">{this.props.item.subtitle}</p>
        </div>
      </div>
    )
  }
});

const YoutubeThumbnail = React.createClass({
  render() {
    const url = `http://img.youtube.com/vi/${this.props.id}/0.jpg`;
    return (
      <img src={url} alt="" width="75" className="block rounded" />
    )
  }
});

const Tabs = React.createClass({
  getInitialState() {
    return { active: this.props.data[0].youtubeId }
  },
  setActive(id) {
    this.setState({ active: id })
  },
  menuItems() {
    return this.props.data.map((p, i) => {
      const active = (this.state.active === p.youtubeId);
      return <MenuItem item={p} active={active} key={i} onClick={this.setActive} />
    })
  },
  render() {
    return (
     <div className="clearfix mt4">
        <div className="sm-col sm-col-4">
          <h2 className="h1 mt0 mb3">Presentations & screencasts</h2>
          {this.menuItems()}
        </div>
        <div className="sm-col sm-col-8">
          <div className="media-16-by-9 shadow rounded bg-white-translucent">
            <YoutubeEmbed id={this.state.active} />
          </div>
        </div>
      </div>
    )
  }
});

React.render(<Tabs data={presentations} />, document.getElementById('react-base'))
