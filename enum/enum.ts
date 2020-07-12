// - это сущность, которая помогает лучше структурировать код,
// если присутствуют какие-то однотипные элементы.

// у него есть 2 типа записи:

enum Membership {
  Simple, // по умолчанию 0, а строковое значение 'Simple'
  Standard, // по умолчанию 1, а строковое значение 'Standard'
  Premium // по умолчанию 2, а строковое значение 'Premium'
}

const membership = Membership.Standard
console.log(membership) // 1

const membershipReverse = Membership[2]
console.log(membershipReverse) // 'Premium'

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social) // 'INSTAGRAM'