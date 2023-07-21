// EXTERNAL IMPORTS
import React from 'react'; 
import { useDispatch, useStore } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';

// INTERNAL IMPORTS
import {
    chooseTitle,
    chooseAuthorFirst,
    chooseAuthorLast,
    chooseSummary,
    choosePrice,
    chooseNumPages,
    choosePublisher,
    choosePublishYear,
    chooseISBN } from '../../redux/slices/rootSlice';
import { BookState } from '../../redux/slices/rootSlice';
import { Input } from '../shareComponents/Input';
import { serverCalls } from '../../api';

interface BookFormProps {
    id?: string;
    data?: BookState;
}

export const BookForm = (props: BookFormProps) => {
    const dispatch = useDispatch();
    // const { bookData, getData } = useGetData()
    const store = useStore()
    const { register, handleSubmit } = useForm<BookState>({})

    const onSubmit: SubmitHandler<BookState> = async(data, event) => {
        if (event) event.preventDefault();

        if (props.id) {     // doing this check will determine whether we are updating or creating books
            console.log(props.id)
            await serverCalls.update(props.id, data);
            console.log(`Updated book: ${data.title}`);
            window.location.reload()   // this is so that it updates it and gets all the new book schema including the one we just updated
            if (event) event.currentTarget.reset()   // this will reset any event, like the input form, event = an HTMLFormElement
        } else {
            dispatch(chooseTitle(data.title))
            dispatch(chooseAuthorFirst(data.author_first))
            dispatch(chooseAuthorLast(data.author_last))
            dispatch(chooseSummary(data.summary))
            dispatch(choosePrice(data.price))
            dispatch(chooseNumPages(data.num_pages))
            dispatch(choosePublisher(data.publisher))
            dispatch(choosePublishYear(data.published_year))
            dispatch(chooseISBN(data.isbn))

            console.log(store.getState()) 

            await serverCalls.create(store.getState() as BookState)   // we are storing it to a state so it can be recalled later and not lost
            window.location.reload()
            if (event) event.currentTarget.reset()  // want to make sure form is reset
        }
    } 
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='title'>Book Name</label>
                    {/* whatever is coming back from this input we will register as name. this is a spread operater since we don't know how many are coming back */}
                    <Input {...register('title')} name='title' placeholder='Title Here' />   
                </div>
                <div>
                    <label htmlFor='author_first'>Author First Name</label>
                    <Input {...register('author_first')} name='author_first' placeholder='Author First Name Here' />
                </div>
                <div>
                    <label htmlFor='author_last'>Author Last Name</label>
                    <Input {...register('author_last')} name='author_last' placeholder='Author Last Name Here' />
                </div>
                <div>
                    <label htmlFor='summary'>Summary</label>
                    <Input {...register('summary')} name='summary' placeholder='Summary Here' />
                </div>
                <div>
                    <label htmlFor='price'>Price </label>
                    <Input {...register('price')} name='price' placeholder='Price Here' />
                </div>
                <div>
                    <label htmlFor='num_pages'>Number of Pages</label>
                    <Input {...register('num_pages')} name='num_pages' placeholder='Number of Pages Here' />
                </div>
                <div>
                    <label htmlFor='publisher'>Publisher</label>
                    <Input {...register('publisher')} name='publisher' placeholder='Publisher Here' />
                </div>
                <div>
                    <label htmlFor='published_year'>Published Year</label>
                    <Input {...register('published_year')} name='published_year' placeholder='Published Year Here' />
                </div>
                <div>
                    <label htmlFor='isbn'>ISBN</label>
                    <Input {...register('isbn')} name='isbn' placeholder='ISBN Here' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}