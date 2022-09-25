import axios from 'axios';
import React from 'react'
import Nav from './components/Nav'
import Venues from './components/Venues'


// api key: fsq3uFarnBTGDCUnwqKohH1JV61x2zSXHBy1hrWKLTGvTiQ=

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      venues: [],
      latlong: "",
    }
  }
  getVenues = (query) => {
    console.log(query);
    const apiKey = 'fsq3uFarnBTGDCUnwqKohH1JV61x2zSXHBy1hrWKLTGvTiQ=';

    const endpoint = 'https://api.foursquare.com/v3/places/search?';
    const params = {
      // client_id: 'WT2SUBPGCLDNSOVLDDON33KC2MZKOF2AC0AMOCX0FODTPZ2H',
      // client_secret: 'ZWPWYSDBBM4TGFTH0G0VKLTQTAIXCGWVRF3OJOTVJFBHQRLC',
      ll: this.state.latlong,
      radius: 10000,
      query: query,
    };

    const url = endpoint + new URLSearchParams(params);

    const options = {
      method: 'GET',
      url: url,
      headers: {
        Accept: 'application/json',
        Authorization: apiKey
      }
    };

    axios.request(options)
      .then(res => {
        console.log(res.data.results);
        this.setState({
          venues: res.data.results
        })
      })
      .catch(error => console.log(error))
  };


  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(response => {
      console.log(response);
      this.setState({ latlong: response.coords.latitude + "," + response.coords.longitude })
    })
  }

  handleCallback = (childData) => {
    this.setState({ selectedOption: childData })
  }



  render() {
    const { selectedOption } = this.state;
    console.log(selectedOption);
    return (
      <div className='flex flex-col justify-center w-screen h-screen border-8 border-cyan-900 shadow-inner'>
        <Nav getVenues = {this.getVenues} />
        <Venues venues={this.state.venues}/>
      </div>
    )
  }

}

export default App
