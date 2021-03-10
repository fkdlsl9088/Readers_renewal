import React, { useCallback, useState } from 'react'
import styles from './reviewWrite.module.css'
import {
  ReviewWriteFormWrapper,
  SearchbookInfo,
  SearchBookText,
  ReviewWriteWapper,
  ReviewCategory,
  ReviewInput,
  ButtonPosition,
} from './ReviewStyles'
import StarRating from './StarRating'
import Button from '../Button'

const ReviewWriteForm = props => {
  const categorySelect = {
    activeObject: '',
    objects: [
      { id: '1', category: '대학교재' },
      { id: '2', category: '만화' },
      { id: '3', category: '초등/유아' },
      { id: '4', category: '잡지' },
      { id: '5', category: '컴퓨터/IT' },
      { id: '6', category: '여행' },
      { id: '7', category: '취업/수험' },
      { id: '8', category: '과학' },
      { id: '9', category: '외국어' },
      { id: '10', category: '기술/공학' },
      { id: '11', category: '종교' },
      { id: '12', category: '역사/문화' },
      { id: '13', category: '정치/사회' },
      { id: '14', category: '자기계발' },
      { id: '15', category: '경제/경영' },
      { id: '16', category: '건강' },
      { id: '17', category: '요리' },
      { id: '18', category: '가정/육아' },
      { id: '19', category: '인문' },
      { id: '20', category: '시/에세이' },
      { id: '21', category: '소설' },
      { id: '22', category: '중/고등참고서' },
      { id: '23', category: '예술/대중문화' },
      { id: '24', category: '취미/스포츠' },
    ],
  }

  const [category, setCategory] = useState(categorySelect)
  const [rating, setRating] = useState(1)

  const ratingHandler = useCallback(value => {
    setRating(value)
  })
  const activeBtn = useCallback(index => {
    setCategory({ ...category, activeObject: category.objects[index] })
  })

  return (
    <ReviewWriteFormWrapper>
      <SearchbookInfo>
        <div>
          <img
            src={!props.thumbnail ? '../no_image.jpg' : props.thumbnail}
            alt={props.title}
          />
        </div>
        <SearchBookText>
          <p>{props.title}</p>
          <h5>저자 : {props.author}</h5>
          <h5>
            출판사 : {props.publisher} | {props.datetime}
          </h5>
          <h5>가격 : {props.price}원</h5>
          <h3>책소개</h3>
          <div>{props.contents}</div>
        </SearchBookText>
      </SearchbookInfo>

      <ReviewWriteWapper>
        <p>카테고리</p>
        <ReviewCategory>
          {category.objects.map((value, index) => (
            <button
              value={value}
              className={
                category.objects[index] === category.activeObject
                  ? styles.active
                  : styles.inactive
              }
              key={index}
              onClick={() => {
                activeBtn(index)
              }}
            >
              {value.category}
            </button>
          ))}
        </ReviewCategory>

        <p>평점</p>
        <StarRating
          size={35}
          value={rating}
          activeColor={'#FADB14'}
          inactiveColor={'#ddd'}
          onChange={ratingHandler}
        />

        <p>후기내용</p>
        <ReviewInput>
          <textarea />
        </ReviewInput>
        <ButtonPosition>
          <Button size="large">후기작성하기</Button>
        </ButtonPosition>
      </ReviewWriteWapper>
    </ReviewWriteFormWrapper>
  )
}

export default ReviewWriteForm
