import axios from 'axios';

const paises = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/countries`);
    if (response.status === 200) {
      const paises = response.data;
      const paisesOptions = paises.map((pais) => ({
        id: pais.id,
        name: pais.name,
      }));
    
      const paisesReady = [...paisesOptions].sort((a, b) => 
        a.name.localeCompare(b.name)
      )

      return paisesReady
    } else {
      throw new Error('Error getting paises');
    }
  } catch (error) {
    console.error('Error fetching paises:', error);
  }
};

export default paises;