"use strict";

var presentations = [{
  title: "LNUG",
  subtitle: "February 2015",
  youtubeId: "cQOPoDmkFg8"
}, {
  title: "Container Camp",
  subtitle: "September 2014",
  youtubeId: "Zve7rJ1FoDU"
}];

var YoutubeEmbed = React.createClass({
  displayName: "YoutubeEmbed",

  render: function render() {
    var url = "https://www.youtube.com/embed/" + this.props.id + "?modestbranding=1&autohide=1&showinfo=0&controls=1";
    return React.createElement("iframe", { src: url, frameBorder: "0", allowFullScreen: true });
  }
});

var MenuItem = React.createClass({
  displayName: "MenuItem",

  onClick: function onClick() {
    this.props.onClick(this.props.item.youtubeId);
  },
  render: function render() {
    var classList = "clearfix p2 mxn2 mb1 rounded border";
    if (this.props.active) {
      classList += " bg-white-translucent border-white";
    } else {
      classList += " border-transparent";
    }
    return React.createElement(
      "div",
      { className: classList, onClick: this.onClick },
      React.createElement(
        "div",
        { className: "left mr2" },
        React.createElement(YoutubeThumbnail, { id: this.props.item.youtubeId })
      ),
      React.createElement(
        "div",
        { className: "overflow-hidden" },
        React.createElement(
          "p",
          { className: "bold mb0" },
          this.props.item.title
        ),
        React.createElement(
          "p",
          { className: "mb0" },
          this.props.item.subtitle
        )
      )
    );
  }
});

var YoutubeThumbnail = React.createClass({
  displayName: "YoutubeThumbnail",

  render: function render() {
    var url = "http://img.youtube.com/vi/" + this.props.id + "/0.jpg";
    return React.createElement("img", { src: url, alt: "", width: "75", className: "block rounded" });
  }
});

var Tabs = React.createClass({
  displayName: "Tabs",

  getInitialState: function getInitialState() {
    return { active: this.props.data[0].youtubeId };
  },
  setActive: function setActive(id) {
    this.setState({ active: id });
  },
  menuItems: function menuItems() {
    var _this = this;

    return this.props.data.map(function (p, i) {
      var active = _this.state.active === p.youtubeId;
      return React.createElement(MenuItem, { item: p, active: active, key: i, onClick: _this.setActive });
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "clearfix mt4" },
      React.createElement(
        "div",
        { className: "sm-col sm-col-4" },
        React.createElement(
          "h2",
          { className: "h1 mt0 mb3" },
          "Presentations & screencasts"
        ),
        this.menuItems()
      ),
      React.createElement(
        "div",
        { className: "sm-col sm-col-8" },
        React.createElement(
          "div",
          { className: "media-16-by-9 shadow rounded bg-white-translucent" },
          React.createElement(YoutubeEmbed, { id: this.state.active })
        )
      )
    );
  }
});

React.render(React.createElement(Tabs, { data: presentations }), document.getElementById("react-base"));