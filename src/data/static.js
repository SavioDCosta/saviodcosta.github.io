// async function fetchJsonFromBin(binUrl) {
//   try {
//     const response = await fetch(binUrl);
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const data = await response.json();
//     return data['record'];
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     throw error;
//   }
// }

// const bioUrl = 'https://api.jsonbin.io/v3/b/654eba5554105e766fce4daf/latest'; 
// const skillsUrl = 'https://api.jsonbin.io/v3/b/654ec14d12a5d3765997c84a/latest'; 

// export const bio = await fetchJsonFromBin(bioUrl)
//   .then(data => {
//     return data;
//   })
//   .catch(error => {
//     console.error('Error in fetchJsonFromBin:', error.message);
//     return [];
//   }
// );

// export const skills = await fetchJsonFromBin(skillsUrl)
//   .then(data => {
//     return data;
//   })
//   .catch(error => {
//     console.error('Error in fetchJsonFromBin:', error.message);
//     return [];
//   }
// );