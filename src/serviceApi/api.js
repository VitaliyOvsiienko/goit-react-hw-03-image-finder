import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34720364-25bd7ca6aede9db569324b321';

export const fetchGalleryWithQuery = async (query, page) => {
  const searchParams = new URLSearchParams({
    q: query,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const response = await axios.get(`${BASE_URL}?${searchParams}`);
  return response.data;
};
