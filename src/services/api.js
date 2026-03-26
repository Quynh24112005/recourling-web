const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || 'Request failed')
  }

  const contentType = response.headers.get('content-type') || ''
  return contentType.includes('application/json') ? response.json() : null
}

class BaseEntity {
  constructor(payload = {}) {
    Object.assign(this, payload)
  }
}

// Database Schema classes
export class Users extends BaseEntity {}
export class PatientProfile extends BaseEntity {}
export class EntranceQuestion extends BaseEntity {}
export class EntranceTest extends BaseEntity {}
export class DiseaseGroup extends BaseEntity {}
export class Topic extends BaseEntity {}
export class Exercise extends BaseEntity {}
export class ExerciseAttempt extends BaseEntity {}
export class TopicProgress extends BaseEntity {}
export class LevelEvaluation extends BaseEntity {}
export class DiscoveryContent extends BaseEntity {}
export class Bookmark extends BaseEntity {}

class ResourceService {
  constructor(path) {
    this.path = path
  }

  list(query = '') {
    return request(`${this.path}${query ? `?${query}` : ''}`)
  }

  getById(id) {
    return request(`${this.path}/${id}`)
  }

  create(payload) {
    return request(this.path, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  }

  update(id, payload) {
    return request(`${this.path}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    })
  }

  remove(id) {
    return request(`${this.path}/${id}`, {
      method: 'DELETE',
    })
  }
}

class AuthService {
  login(payload) {
    return request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  }

  register(payload) {
    return request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  }
}

export const api = {
  auth: new AuthService(),
  users: new ResourceService('/users'),
  patientProfiles: new ResourceService('/patient-profiles'),
  entranceQuestions: new ResourceService('/entrance-questions'),
  entranceTests: new ResourceService('/entrance-tests'),
  diseaseGroups: new ResourceService('/disease-groups'),
  topics: new ResourceService('/topics'),
  exercises: new ResourceService('/exercises'),
  exerciseAttempts: new ResourceService('/exercise-attempts'),
  topicProgress: new ResourceService('/topic-progress'),
  levelEvaluations: new ResourceService('/level-evaluations'),
  discoveryContent: new ResourceService('/discovery-content'),
  bookmarks: new ResourceService('/bookmarks'),
}
