// ---------------------------------------------------------------------------
// EDIT ME / ADD A NEW PROJECT:
// Just append a new object to the `projects` array below. The Projects
// section, filters, and detail modal all update automatically — no other
// file needs to change.
//
// `category` must be one of: 'AI/ML' | 'Deep Learning' | 'Computer Vision'
// | 'Java/DSA' | 'Other'  (this drives the filter buttons).
//
// `image` is optional. Leave it as `null` to use the auto-generated
// gradient thumbnail, or set it to an image path (e.g. "/images/foo.png")
// once you have a real screenshot in the /public/images folder.
//
// Example of a new entry:
// {
//   id: 'my-new-project',
//   title: 'Project Name',
//   description: 'One or two sentence summary shown on the card.',
//   technologies: ['Python', 'PyTorch'],
//   image: null,
//   github: 'https://github.com/YOUR_GITHUB/project-repo',
//   demo: '', // leave empty string if there's no live demo
//   category: 'AI/ML',
//   details: {
//     overview: 'A short paragraph describing what the project is.',
//     problem: 'What problem/question the project addresses.',
//     solution: 'How you approached and solved it.',
//     features: ['Feature one', 'Feature two'],
//     results: 'What you achieved — metrics, accuracy, learnings, etc.'
//   }
// }
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: 'cifar10-image-classification',
    title: 'CIFAR-10 Image Classification',
    description:
      'CNN-based image classification model trained on the CIFAR-10 dataset using PyTorch.',
    technologies: ['Python', 'PyTorch', 'CNN', 'NumPy', 'Matplotlib'],
    image: null,
    github: 'https://github.com/YOUR_GITHUB/cifar10-image-classification',
    demo: '',
    category: 'Computer Vision',
    details: {
      overview:
        'A convolutional neural network built from scratch in PyTorch to classify images from the CIFAR-10 dataset into 10 object categories.',
      problem:
        'Correctly classifying small, low-resolution color images across 10 visually similar classes (e.g. cats vs. dogs, cars vs. trucks).',
      solution:
        'Designed a CNN architecture with convolutional, pooling, and fully connected layers, trained with data augmentation and normalization to improve generalization.',
      features: [
        'Custom CNN architecture in PyTorch',
        'Data augmentation and normalization pipeline',
        'Training/validation loss and accuracy tracking',
        'Confusion matrix for per-class performance'
      ],
      results:
        '[ADD YOUR RESULTS] — e.g. final test accuracy, training time, and key learnings from experimentation.'
    }
  },
  {
    id: 'smart-cart-clustering',
    title: 'Smart Cart Clustering System',
    description:
      'A customer segmentation system using unsupervised clustering on retail/cart data.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    image: null,
    github: 'https://github.com/YOUR_GITHUB/smart-cart-clustering',
    demo: '',
    category: 'AI/ML',
    details: {
      overview:
        'A machine learning project that segments customers into meaningful groups based on purchasing behavior using clustering algorithms.',
      problem:
        'Retailers need to understand different customer segments to personalize offers, but raw transaction data has no built-in labels.',
      solution:
        'Applied exploratory data analysis and feature engineering, then used clustering (e.g. K-Means) to group customers by behavior, evaluating cluster quality with metrics like silhouette score.',
      features: [
        'Exploratory data analysis (EDA) on customer/cart data',
        'Feature scaling and preprocessing pipeline',
        'K-Means clustering with elbow-method tuning',
        'Cluster visualization and interpretation'
      ],
      results:
        '[ADD YOUR RESULTS] — e.g. number of segments discovered and what distinguished each segment.'
    }
  },
  {
    id: 'logistic-regression-classifier',
    title: 'Logistic Regression Project',
    description:
      'A supervised classification project with full preprocessing, scaling, and evaluation pipeline.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    image: null,
    github: 'https://github.com/YOUR_GITHUB/logistic-regression-classifier',
    demo: '',
    category: 'AI/ML',
    details: {
      overview:
        'An end-to-end binary/multi-class classification pipeline built around logistic regression, covering the full ML workflow from raw data to evaluated model.',
      problem:
        'Building a reliable classifier requires more than fitting a model — clean data, proper scaling, and honest evaluation all matter.',
      solution:
        'Implemented data cleaning, feature scaling, train/test splitting, and model training with logistic regression, followed by evaluation using standard classification metrics.',
      features: [
        'Data preprocessing and missing-value handling',
        'Feature scaling (standardization/normalization)',
        'Logistic regression model training',
        'Evaluation via accuracy, precision, recall, and confusion matrix'
      ],
      results:
        '[ADD YOUR RESULTS] — e.g. final accuracy/F1-score and what the model struggled with.'
    }
  },
  {
    id: 'knn-classification',
    title: 'KNN Classification',
    description:
      'K-Nearest Neighbors classifier with hyperparameter tuning for optimal k selection.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    image: null,
    github: 'https://github.com/YOUR_GITHUB/knn-classification',
    demo: '',
    category: 'AI/ML',
    details: {
      overview:
        'A classification project using the K-Nearest Neighbors algorithm, with a focus on tuning the number of neighbors (k) for best performance.',
      problem:
        "KNN's performance is highly sensitive to the choice of k and to feature scaling, so naive defaults rarely give the best result.",
      solution:
        'Built a pipeline that scales features, sweeps across candidate values of k, and selects the best-performing model using cross-validation.',
      features: [
        'Feature scaling for distance-based learning',
        'Hyperparameter sweep over k values',
        'Cross-validation for model selection',
        'Accuracy curve visualization across k'
      ],
      results:
        '[ADD YOUR RESULTS] — e.g. the optimal k found and the resulting accuracy.'
    }
  },
  {
    id: 'flappy-bird-ai',
    title: 'Flappy Bird AI',
    description:
      'A reinforcement-learning-driven agent that learns to play a Flappy Bird–style game.',
    technologies: ['Python', 'Reinforcement Learning', 'NumPy'],
    image: null,
    github: 'https://github.com/YOUR_GITHUB/flappy-bird-ai',
    demo: '',
    category: 'Other',
    details: {
      overview:
        'A game-playing agent that learns to navigate a Flappy Bird–style environment through trial-and-error reinforcement learning rather than hard-coded rules.',
      problem:
        'Teaching an agent to make real-time decisions (flap or not) in a continuously changing environment, purely from reward signals.',
      solution:
        'Modeled the game as a reinforcement learning environment and trained an agent to maximize survival time/score through repeated episodes of play.',
      features: [
        'Custom game environment/state representation',
        'Reward-based learning loop',
        'Training progress tracked across episodes',
        'Visual playback of the trained agent'
      ],
      results:
        '[ADD YOUR RESULTS] — e.g. best score achieved and number of training episodes.'
    }
  }
];

export const projectCategories = ['All', 'AI/ML', 'Deep Learning', 'Computer Vision', 'Java/DSA', 'Other'];
