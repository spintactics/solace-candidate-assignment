export enum Specialties {
  Bipolar = "Bipolar",
  LGBTQ = "LGBTQ",
  Medication = "Medication/Prescribing",
  Suicide_History = "Suicide History/Attempts",
  Mental_Health = "General Mental Health (anxiety, depression, stress, grief, life transitions)",
  Men = "Men's issues",
  Relationship = "Relationship Issues (family, friends, couple, etc)",
  Trauma = "Trauma & PTSD",
  Personality_Disorder = "Personality disorders",
  Personal_Growth = "Personal growth",
  Substance = "Substance use/abuse",
  Pediatrics = "Pediatrics",
  Women = "Women's issues (post-partum, infertility, family planning)",
  Chronic = "Chronic pain",
  Weight_Loss = "Weight loss & nutrition",
  Eating = "Eating disorders",
  Diabetic = "Diabetic Diet and nutrition",
  Coaching = "Coaching (leadership, career, academic and wellness)",
  Coaching_Life = "Life coaching",
  Obsessive_Compulsive = "Obsessive-compulsive disorders",
  Neuropsychological = "Neuropsychological evaluations & testing (ADHD testing)",
  ADHD = "Attention and Hyperactivity (ADHD)",
  Sleep = "Sleep issues",
  Psychotic = "Schizophrenia and psychotic disorders",
  Learning = "Learning disorders",
  Domestic = "Domestic abuse",
};

export interface Advocate {
  firstName: string
  lastName: string
  city: string
  degree: string
  specialties: Specialties[]
  yearsOfExperience: number
  phoneNumber: number
}
