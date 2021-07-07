class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
    this.channels = {};
  }
  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async channel(id, videos) {
    const response = await this.youtube.get('channels', {
      params: {
        part: 'snippet, statistics',
        id,
      },
    });
    if (response.data.items[0].hasOwnProperty('snippet')) {
      response.data.items[0].channelInfo = response.data.items[0].snippet;
      delete response.data.item[0].snippet;
    }
  }
}

export default Youtube;
