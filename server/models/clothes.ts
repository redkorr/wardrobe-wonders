const Schema = mongoose.Schema;

const clothSchema = new Schema({
  cloth_name: {
    type: String,
    required: true,
  },
  cloth_type: {
    type: String,
    required: true,
  },
  cloth_description: { body: String, fabric: [String] },
  cloth_color: {
    type: String,
    require: true,
  },
  cloth_size: {
    type: String,
    require: true,
  },
  cloth_stock: {
    type: Number,
    require: true,
  },
});
