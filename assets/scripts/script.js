const url = 'https://www.loc.gov?fo=json';

searchEl = document.querySelector('#search');
searchButtonEl = document.querySelector('#searchButton');
searchFormatEl = document.querySelector('#searchFormat');


// fetch data
const fetchData = (params) => {
    // handle params
    fetch(url).then((response) => {
        if ( response.ok ) {
            response.json().then((data) => {
                console.log('data:',data);
                return data;
            })
        }
        else {
            console.error('Error:', response.statusText);
        }
    }).catch((error) => {
        console.error('Error: no response');
    });
}

const doSearch = () => {
    let params = '';
    const searchParam = searchEl.value;console.log('searchParam',searchParam);
    const searchFormat = searchFormatEl.options[searchFormatEl.selectedIndex].value;
    params = searchFormat ? `&in=${searchFormat}&q=${searchParam}` : `&q=${searchParam}`;
    fetchData(params);
}

// add listeners
searchButtonEl.addEventListener("click", function() {
  doSearch();
});
