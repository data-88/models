import { slugify } from "@lib/utils/textConverter";

const taxonomyFilter = (models: any[], name: string, key: any) =>
  models.filter((model) =>
    model.data[name].map((name: string) => slugify(name)).includes(key)
  );

export default taxonomyFilter;
