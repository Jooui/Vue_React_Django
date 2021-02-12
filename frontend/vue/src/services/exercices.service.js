import ApiService from "@/services/api.service";
const ExercicesService = {
  query(type, params) {
    return ApiService.query(
      "fitness/exercice" + (type === "feed" ? "/feed" : ""),
      {
        params: params,
      }
    );
  },
  get(slug) {
    return ApiService.get("fitness/exercice", slug);
  },
  create(params) {
    return ApiService.post("fitness/exercice", { exercice: params });
  },
  update(slug, params) {
    return ApiService.update("fitness/exercice", slug, { exercice: params });
  },
  destroy(slug) {
    return ApiService.delete(`fitness/exercice/${slug}`);
  },
  favorite(slug) {
    return ApiService.post(`fitness/exercice/${slug}/favorite`);
  },
  unfavorite(slug) {
    return ApiService.delete(`fitness/exercice/${slug}/favorite`);
  },
};

export default ExercicesService;
