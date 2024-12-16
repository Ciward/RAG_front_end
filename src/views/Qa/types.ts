export interface Question {
  id: number
  content: string
  expanded?: boolean
  answers?: Answer[]
  finished?: boolean
}

export interface Answer {
  id: number
  questionId: number
  content: string
  username: string
  createTime: string
  status: 'pending' | 'approved' | 'rejected'
}

export interface SubmitAnswerParams {
  questionId: number
  content: string
}

export interface AuditAnswerParams {
  answerId: number
  questionId: number
  status: 'pending' | 'approved' | 'rejected'
} 