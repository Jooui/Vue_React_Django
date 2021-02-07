import ApiService from "@/services/api.service";
const CategoriesService = {
  query() {
    return ApiService.query("fitness/category", {});
  },
  get(id) {
    return ApiService.get("fitness/category", id);
  },
  // create(params) {
  //   return ApiService.post("fitness/exercice", { exercice: params });
  // },
  // update(slug, params) {
  //   return ApiService.update("fitness/exercice", slug, { exercice: params });
  // },
  // destroy(slug) {
  //   return ApiService.delete(`fitness/exercice/${slug}`);
  // },
};

export default CategoriesService;
