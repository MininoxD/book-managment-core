export interface BookCreatorRequest {
  id: string
  title: string
  price: number
  photos: Array<string>
  authorId: string
  editorialId: string
  genreId: string
}
