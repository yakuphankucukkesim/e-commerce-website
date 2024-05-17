import axios from 'axios';

import { CategoryDocument } from '../models/Category';

const getCategories = async () => {
  const response = await axios.get<CategoryDocument[]>(
    `${process.env.REACT_APP_BASE_API}/category`
  );

  return response;
};

const categoryService = {
  getCategories,
};

export default categoryService;
