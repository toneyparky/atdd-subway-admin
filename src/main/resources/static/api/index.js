const BASE_URL = "localhost:8080";

const METHOD = {
  PUT() {
    return {
      method: "PUT"
    };
  },
  DELETE() {
    return {
      method: "DELETE"
    };
  },
  POST(data) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: data
      })
    };
  }
};

const api = (() => {
  const request = (uri, config) => fetch(uri, config).then(data => data.json());

  const station = {
    get() {
      request(`${BASE_URL}/stations`);
    },
    create(data) {
      request(`${BASE_URL}/station`, METHOD.POST(data));
    },
    update(data) {
      request(`${BASE_URL}/station/${id}`, METHOD.PUT(data));
    },
    delete(id) {
      request(`${BASE_URL}/station/${id}`, METHOD.DELETE);
    }
  };

  return {
    station
  };
})();

export default api;
