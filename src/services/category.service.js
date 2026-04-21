import custAxios from "../configs/axios.config";

const CategoryAPI = {
  // Public usage
  getAll: (type) => custAxios.get(`/categories?type=${type}`),
  
  // Admin usage
  create: (data) => custAxios.post('/categories', data),
  update: (id, data) => custAxios.patch(`/categories/${id}`, data),
  delete: (id) => custAxios.delete(`/categories/${id}`)
};

export default CategoryAPI;
