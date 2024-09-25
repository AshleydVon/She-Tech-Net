const { Schema } = mongoose;

const mentorshipSchema = new Schema({

  mentor: {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user_db',  
      required: true
    },
    expertise: {
      type: String,
      required: true,
      trim: true
    },
    availableTimeSlots: {
      type: [String],  
      required: true
    }
  }