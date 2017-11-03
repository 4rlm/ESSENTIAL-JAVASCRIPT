##==== JK AS =====##
##==== HACKER NEWS =====##
##==== LUCKY AJAX =====##
##== HORSES - CHECKPOINT - JK ===##

# CONSIDER USING: #'.TRY' METHOD


##==== JK AS =====##
get "/posts" do
  @posts = Post.order("created_at DESC")
  erb :'posts/index'
end

post "/posts" do
  @post = Post.new(params[:post])

  if @post.save
    if request.xhr?
    erb :"posts/_post",locals: {post:@post}, layout:false
    else
    redirect "posts/#{@post.id}"
    end
  else
    if request.xhr?
      status 500
      @post.errors.values.flatten
    else
    erb :"posts/new"
    end
  end
end

get "/posts/new" do
  @post = Post.new
  erb :'posts/new'
end

get "/posts/:id" do
  @post = Post.find(params[:id])
  erb :'posts/show'
end

put "/posts/:id/like" do
  @post = Post.find(params[:id])
  @post.increment!(:likes_count)

  if request.xhr? ###  IMPORTANT FOR VOTE/LIKE COUNTS!
    @post.likes_count.to_s
  else
  redirect "/posts/#{@post.id}"
  end
end


##==== HACKER NEWS =====##
get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

# MODIFIED BELOW
post '/posts/:id/vote' do
  post = Post.find(params[:id])
  post.votes.create(value: 1) # adding vote

  ### ORIGINAL ABOVE / NEW BELOW ###
  if request.xhr?  ###  IMPORTANT FOR VOTE/LIKE COUNTS!
    content_type :json
    { count: post.votes.count }.to_json
  else
    redirect "/posts"
  end

end

# MODIFIED BELOW
delete '/posts/:id' do
  # write logic for deleting posts here.

  ### ORIGINAL ABOVE / NEW BELOW ###
  Post.delete(params[:id])

  if request.xhr?
    content_type :json
    return { id: params[:id].to_s }.to_json
  else
    redirect '/'
  end

end


# MODIFIED BELOW
post '/posts' do
  # Post.create( title: params[:title],
  #   username: Faker::Internet.user_name,
  #   comment_count: rand(1000) )

  ### ORIGINAL ABOVE / NEW BELOW ###
  post = Post.create( title: params[:title],
    username: Faker::Internet.user_name,
    comment_count: rand(1000) )

    if post.save
      status 200
      if request.xhr?
        #  params == data
        erb :_form, layout: false, locals: { post: post }
      else
        redirect '/posts'
      end
    else
      status 422
    end

  end

  get '/post/:id' do
    @post = Post.find(params[:id])
    erb :post
  end

##==== LUCKY AJAX =====##
get '/' do
  erb :index
end

post '/rolls' do
  @die = Die.new(params[:sides].to_i)
  if request.xhr?
    @die.roll.to_s
    # erb :'_form'
  else
    erb :index
  end
end

##== HORSES - CHECKPOINT - JK ===##
get '/horses' do
  @horses = Horse.all
  erb :"/horses/index"
end

get '/horses/new' do
  @horse = Horse.new
  if request.xhr?
    erb :"/horses/_form",locals: {horse:@horse}, layout: false
  else
    erb :"/horses/new"
  end
end

post '/horses' do
  horse = Horse.new(params[:horse])
  if horse.save
    if request.xhr?
      erb :"/horses/_list_horse", locals: {horse:horse}, layout:false
    else
      redirect "/horses/#{horse.id}"
    end
  else
    erb :"/horses/new"
  end
end

get '/horses/:id' do
  @horse = Horse.find(params[:id])
  if request.xhr?
    erb :"horses/_profile_info", locals: {horse:@horse,profile:true}, layout:false
  else
    erb :"/horses/show"
  end
end
