import ApiService from "@/services/api.service";
const TrainingsService = {
  query(type, params) {
    return ApiService.query(
      "fitness/training" + (type === "feed" ? "/feed" : ""),
      {
        params: params,
      }
    );
  },
  get(slug) {
    return ApiService.get("fitness/training", slug);
  },
  create(params) {
    return ApiService.post("fitness/training", { training: params });
  },
  update(slug, params) {
    return ApiService.update("fitness/training", slug, { training: params });
  },
  destroy(slug) {
    return ApiService.delete(`fitness/training/${slug}`);
  },
  favorite(slug) {
    ApiService.auth();
    return ApiService.post(`fitness/training/${slug}/favorite`);
  },
  unfavorite(slug) {
    ApiService.auth();
    return ApiService.delete(`fitness/training/${slug}/favorite`);
  },
};

export default TrainingsService;
