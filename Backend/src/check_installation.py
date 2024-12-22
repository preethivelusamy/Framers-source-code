import os
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Set paths
dataset_path = 'datasets/face_shape_detector'

def check_tensorflow_version():
    print("TensorFlow version:", tf.__version__)

def prepare_data():
    # Ensure the dataset path exists
    if not os.path.exists(dataset_path):
        raise FileNotFoundError(f"Dataset directory not found: {dataset_path}")

    # Data generators for training and validation
    datagen = ImageDataGenerator(validation_split=0.2)  # Using 20% of data for validation

    # Prepare training data generator
    train_generator = datagen.flow_from_directory(
        dataset_path,
        target_size=(150, 150),  # Adjust based on your model requirements
        batch_size=32,
        class_mode='categorical',
        subset='training'
    )

    # Prepare validation data generator
    validation_generator = datagen.flow_from_directory(
        dataset_path,
        target_size=(150, 150),
        batch_size=32,
        class_mode='categorical',
        subset='validation'
    )

    return train_generator, validation_generator

def train_model():
    train_generator, validation_generator = prepare_data()

    # Simple CNN model
    model = tf.keras.models.Sequential([
        tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(150, 150, 3)),
        tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
        tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
        tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
        tf.keras.layers.Flatten(),
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.Dense(len(train_generator.class_indices), activation='softmax')  # Number of classes
    ])

    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

    # Train the model
    model.fit(train_generator, validation_data=validation_generator, epochs=10)  # Adjust epochs as necessary

if __name__ == "__main__":
    check_tensorflow_version()
    train_model()
