
eat and review

restaurant, review

restaurant
name:string, cuisine:string, address:string, city:string, state:string, zip:string, user_id:integer

review
user_id:integer, restaurant_id:integer, rating:integer, description:string






== MODELS ==
class Restaurant
  validates :user_id, :name, :cuisine, :address, :city, :state, :zip, presence:true
  belongs_to :user
  has_many :reviews

REVIEWS
class Review
  validates :user_id, :restaurant_id, :rating, :description, presence:true
  belongs_to :user
  belongs_to :restaurant

USERS
class User
  validates :username, :email, presence:true, uniqueness: true
  validates :password_hash, presence:true
  has_many :restaurants
  has_many :reviews





== MIGRATIONS ==
create_table :reviews do |t|
  t.integer :user_id, null: false
  t.integer :restaurant_id, null: false
  t.integer :rating, null: false
  t.string :description, null: false
  t.timestamps

create_table :restaurants do |t|
  t.string :name, null: false
  t.string :cuisine, null: false
  t.string :address, null: false
  t.string :city, null:false
  t.string :state, null:false
  t.string :zip, null:false
  t.integer :user_id, null:false
  t.timestamps

create_table :users do |t|
  t.string :username, null: false
  t.string :email, null: false
  t.string :password_hash, null: false
  t.timestamps














========================
>> ASSESSMENT

! CREATE GIT BRANCH AND PUSH PRIOR WORK BEFORE GENERATING NEW APP!!!
Generator: sample bay
bid, item
BIDS >> user_id:integer, item_id:integer, amount:decimal
ITEMS >> name, condition, description, start_date:datetime, end_date:datetime, user_id:integer

$ be bundle install
$ be rake db:create
$ be rake db:migrate
$ be shotgun

> register, then sample all sections.
> create associations (belongs_to, has_many, validations, etc)

$ be rake db:drop
$ be rake db:create
$ be rake db:migrate
$ be shotgun
> register, then sample all sections.
!! IF PARTS 1-2 OF ASSESSMENT ARE COMMITTED AND PUSHED....>>
> COPY AND PASTE ALL GENERATED FILES INTO PART THREE OF ASSESSMENT

$ be rake db:drop
$ be rake db:create
$ be rake db:migrate
$ be shotgun
> register, then sample all sections.
> CONTINUE WORKING, THEN COMMIT CHANGES.
===========================

FOR VIEWS, USE 'DATE' FOR INPUT TYPE ON NEW, EX...
https://apidock.com/ruby/DateTime/strftime

NEW ITEM FORM:
<div class="form-group">
  <label for="end_time" class="col-sm-2 control-label">End Time</label>
  <div class="col-sm-10">
    <input class="form-control" id="end_time" name="item[end_time]" type="date" value="<%= @item.end_time %>" placeholder="End Time" />
  </div>
</div>

VIEW ITEM:
<td><%= @item.start_time.strftime('%x') %></td>
<td><%= @item.end_time.strftime('%x') %></td>

2016-12-26 01:00:00
===========================

== MODELS ==
class Bid
  belongs_to :user
  belongs_to :item
  validates :user_id, :item_id, :amount, presence:true

class Item
  belongs_to :user
  validates :name, :condition, :start_date, :end_date, presence:true
  has_many :bids

class User
  include BCrypt
  validates :username, :email, presence:true, uniqueness: true
  validates :password_hash, presence:true
  has_many :items
  has_many :bids

== MIGRATIONS ==
create_table :bids do |t|
  t.integer :user_id, null: false
  t.integer :item_id, null: false
  t.integer :amount, null: false
  t.timestamps

create_table :items do |t|
  t.string :name, null: false
  t.string :condition, null: false
  t.string :description, null: false
  t.datetime :start_date, null:false
  t.datetime :end_date, null:false
  t.integer :user_id, null:false
  t.timestamps

create_table :users do |t|
  t.string :username, null: false
  t.string :email, null: false
  t.string :password_hash, null: false
  t.timestamps
========================

AUCTION CONTROLLERS (NOTE: CREATE**)

# CREATE:  ## ====IMPORTANT METHOD BELOW> LINK USER ID TO NEW ITEM.
post '/items' do
  params[:item][:user_id] = @user.id
  @item = Item.find_or_create_by(params[:item])
  @alert_msg[:success_alert] = "Auction Item Has Been Added."
  # erb :'items/user_items'
  redirect 'items/user_items'
end

========= BELOW ===============

class ItemsController < ApplicationController

  # before "/items/*" do
  #   if !request.post?
  #     if !logged_in
  #       @alert_msg[:danger_alert] = "Please login to choose new items."
  #       erb :'users/login'
  #     end
  #   end
  # end

  # INDEX: items view all.
  get '/items' do
    @items = Item.order('updated_at ASC').limit(10)
    # @items = Item.all.order('updated_at DESC').paginate(page: params[:page], per_page: 5)
    erb :'items/index'
  end

  # NEW: items new
  get '/items/new' do

    if !logged_in
      @alert_msg[:danger_alert] = "Please login to choose new Item."
      erb :'users/login'
    else
      @item = Item.new  ## Prevents errors on Form Partial.
      erb :'items/new'
    end

  end

###### CUSTOMIZING BELOW #####

  # CREATE:  ## ====IMPORTANT METHOD BELOW> LINK USER ID TO NEW ITEM.
  post '/items' do
    params[:item][:user_id] = @user.id
    @item = Item.find_or_create_by(params[:item])
    @alert_msg[:success_alert] = "Auction Item Has Been Added."
    # erb :'items/user_items'
    redirect 'items/user_items'
  end

  get '/items/user_items' do
    if !logged_in
      @alert_msg[:danger_alert] = "Please login to view your items."
      erb :'users/login'
    else
      @user_items = Item.where(user_id: @user.id)
      erb :'items/user_items'
    end
  end

  get '/items/:id/item_bid_form' do
    if !logged_in
      @alert_msg[:danger_alert] = "Please login to place a bid."
      erb :'users/login'
    else
      @item = Item.find(params[:id])
      erb :'items/item_bid_form'
    end
  end

  post '/items/:id/item_bid_form' do
    Bid.find_or_create_by(amount: params[:bid][:amount], user_id: @user.id, item_id: params[:id])
    @alert_msg[:success_alert] = "Your bid has been submitted."

    redirect '/bids'
  end


  ###### CUSTOMIZING ABOVE #####


  # SHOW: displays a single item detail page.
  get '/items/:id' do
    @item = Item.find(params[:id])
    erb :'items/show'
  end

  # EDIT:
  get '/items/:id/edit' do
    @item = Item.find(params[:id])
    erb :'items/edit'
  end

  ##### Update Method (patch or put) ####

  # UPDATE: Method for patch and put
  def update_item
    @item = Item.find(params[:id])
    @item.update(params[:item])
    redirect "/items/#{@item.id}"
  end

  # UPDATE: patch
  patch '/items/:id' do
    update_item
  end

  # UPDATE: put
  put '/items/:id' do
    update_item
  end

  #################################

  # DELETE:
  delete '/items/:id' do
    Item.find(params[:id]).destroy!
    @alert_msg[:success_alert] = "Item Successfully Deleted."
    erb :'items/user_items'
  end

end

=======================
>>> LINK TO SHOW SHOULD BE LIKE...
<td><a href="/items/<%= item.id %>"><%= item.name %></a></td>

<h3>View All Item</h3>

<table class="table table-bordered table-hover table-striped text-nowrap">
  <tr>
    <th class="w-small">ID</th>
    <th>Name</th>
    <th>Condition</th>
    <th>Description</th>
    <th>Start Time</th>
    <th>End Time</th>
    <th>Status</th>
    <th>User Id</th>
    <th class="w-med">Updated</th>
    <th colspan="2" class="w-med">Manage</th>
  </tr>
  <% @items.each do |item|%>
  <tr>
    <td class="w-small"><%= item.id%></td>
    <td><a href="/items/<%= item.id %>"><%= item.name %></a></td>
    <td><%= item.condition %></td>
    <td><%= item.description %></td>
    <td><%= item.start_time.strftime('%x') %></td>
    <td><%= item.end_time.strftime('%x') %></td>
    <td><%= item.status %></td>
    <td><%= item.user_id %></td>
    <td><%= item.updated_at.strftime('%x')%></td>
    <td><a href="/items/<%= item.id %>/edit"><span class="glyphicon glyphicon-edit"></span></a></td>
    <td><%= erb :'items/_delete', layout: true, locals: { item: item }%></td>
  </tr>
  <% end %>
</table>
=======================


USER_ITEMS (JOINED), LINKED TO USER PROFILE:

  <table class="table table-bordered table-hover table-striped text-nowrap">
    <tr>
      <th class="w-small">ID</th>
      <th class="w-small">Username</th>
      <th class="w-small">Email</th>
      <th class="w-med">Last Visit</th>
      <th class="w-med">User Profile</th>
    </tr>

    <tr>
      <td><%= @user.id %></td>
      <td><%= @user.username %></td>
      <td><%= @user.email %></td>
      <td><%= @user.updated_at.strftime('%x')%></td>
      <td><a href="/users/<%= @user.id %>"><span class="glyphicon glyphicon-user"></span></a></td>
    </tr>

  </table>

  =======================


  <h3>View All My Items</h3>

  <table class="table table-bordered table-hover table-striped text-nowrap">
    <tr>
      <th class="w-small">ID</th>
      <th>Name</th>
      <th>Condition</th>
      <th>Description</th>
      <th>Start Time</th>
      <th>End Time</th>
      <th>Status</th>
      <th>User Id</th>
      <th class="w-med">Updated</th>
      <th colspan="2" class="w-med">Manage</th>
    </tr>
    <% if @user_items.present? %>
    <% @user_items.each do |item|%>
    <tr>
      <td class="w-small"><%= item.id%></td>
      <td><a href="/items/<%= item.id %>"><%= item.name %></a></td>
      <td><%= item.condition %></td>
      <td><%= item.description %></td>
      <td><%= item.start_time.strftime('%x') %></td>
      <td><%= item.end_time.strftime('%x') %></td>
      <td><%= item.status %></td>
      <td><%= item.user_id %></td>
      <td><%= item.updated_at.strftime('%x')%></td>
      <td><a href="/items/<%= item.id %>/edit"><span class="glyphicon glyphicon-edit"></span></a></td>
      <td><%= erb :'items/_delete', layout: true, locals: { item: item }%></td>
    </tr>
    <% end %>
    <% end %>
  </table>


  <div class="digg_pagination">
    <%#= will_paginate @items, renderer: BootstrapPagination::Sinatra %>
    <%#= will_paginate @items %>
  </div>

  <div class="">
    <h3><a href='/items/new'>Post More Items</a></h3>
  </div>


</div>

=======================










========================
DBC OVERFLOW

== MODELS ==
Answer
  belongs_to :users
  belongs_to :questions
  has_many :votes, as: :votable
  has_many :comments, as: :commentable

Comment
  belongs_to :users
  belongs_to :commentable, polymorphic: true
  has_many :votes, as: :votable

Question
  belongs_to :users
  has_many :answers
  has_many :comments, as: :commentable

class User
  validates :username, :email, :pw_hash, presence: true
  validates :email, uniqueness: true

  has_many :questions
  has_many :answers
  has_many :votes
  has_many :comments

Vote
  belongs_to :users
  belongs_to :votable, polymorphic: true

== MIGRATIONS ==
create_table :users do |t|
  t.string :username, null: false
  t.string :email, null: false
  t.string :pw_hash, null: false
  t.index :email, unique: true

create_table :questions do |t|
  t.string :title
  t.string :body
  t.integer :user_id
  t.integer :view_count, default: 0

create_table :answers do |t|
  t.string :body
  t.integer :user_id
  t.integer :question_id

create_table :comments do |t|
  t.string :body
  t.integer :user_id
  t.references :commentable, polymorphic: true, index: true

create_table :votes do |t|
  t.integer :user_id
  t.references :votable, polymorphic: true, index: true

== CONTROLLERS - NEW/CREATE ==
# CREATE:
post '/answers' do
  params[:answer][:user_id] = @user.id if params[:answer][:user_id].nil?
  answer = Answer.find_or_create_by(params[:answer])

  redirect '/questions'
end

# CREATE:
post '/questions' do
  params[:question][:user_id] = @user.id
  question = Question.find_or_create_by(params[:question])

  redirect '/questions'
end

# CREATE:
post '/comments' do
  body = params[:comment][:body]
  commentable_type = params[:comment][:commentable_type]
  commentable_id = params[:comment][:commentable_id]

  comment = Comment.find_or_initialize_by(body: body)
  question_or_answer = commentable_type.classify.constantize.find(commentable_id)
  question_or_answer.comments << comment
  @user.comments << comment
  comment.save

  redirect '/questions'
end
========================



========================
CHANNEL APP

== MODELS ==
Channel
  has_many :subscriptions
  has_many :users, through: :subscriptions
#==|
Subscription
  belongs_to :channel
  belongs_to :user
#==|
User
  has_many :subscriptions
  has_many :channels, through: :subscriptions
  validates :first_name, :last_name, :email, :pw_hash, presence: true
  validates :email, uniqueness: true

== MIGRATIONS ==
create_table :subscriptions do |t|
  t.integer :user_id, null: false
  t.integer :channel_id, null: false
  t.timestamps null: false
end
add_index :subscriptions, [:user_id, :channel_id], :unique => true
add_index :subscriptions, :channel_id
#==|
create_table :channels do |t|
  t.string :name, null: false
  t.string :callsign, null: false
  t.decimal :price_per_month, null: false
  t.timestamps null: false
end
#==|
create_table :users do |t|
# t.string :name, null: false
t.string :first_name, null: false
t.string :last_name, null: false
t.string :email, null: false
t.string :pw_hash, null: false
# t.string :hashed_password, null: false
t.timestamps null: false
end
add_index :users, :email, :unique => true
#==|

== CONTROLLERS - NEW/CREATE ==
REMOVE SUBSCRIPTIONS
delete '/subscriptions/remove_channel/:id' do
  channel_id = params[:id]
  Subscription.find_by(user_id: @user.id, channel_id: channel_id).destroy!
  @alert_msg[:danger_alert] = "Selected Channel Has Been Removed."
  erb :'subscriptions/user_subs'
end

ADD SUBSCRIPTIONS
post '/subscriptions/add_channel/:id' do
  channel_id = params[:id]
  Subscription.find_or_create_by(user_id: @user.id, channel_id: channel_id)
  @alert_msg[:success_alert] = "Selected Channel Has Been Added."
  erb :'subscriptions/user_subs'
end

!!== SORT AND GROUP JOINED TABLE (SORT BY COUNT)==!!
get '/' do
  # @alert_msg[:success_alert] = "Success test alert ..."
  # @alert_msg[:danger_alert] = "Danger test alert ..."

  # !logged_in ? (redirect 'users/login') : redirect_to_home_page

  # if !logged_in
  #   redirect 'users/login'
  # else

  @channels = Channel.all.order("name ASC").paginate(page: params[:page], per_page: 10)
  @popular_channels = Channel.joins(:subscriptions).group("channels.id").order("count(channels.id) DESC, name ASC").paginate(page: params[:page], per_page: 10)

  redirect_to_home_page
end
========================




========================
AR CRAIGSLIST (JOIN)

== MODELS ==
Article
  has_one :article_category
  has_one :category, through: :article_category

Category
  validates :name, uniqueness: true
  has_many :article_categories
  has_many :articles, through: :article_categories

ArticleCategory
  belongs_to :article
  belongs_to :category

== MIGRATIONS ==
create_table :articles do |t|
  t.string :title
  t.string :description
  t.string :author
  t.string :email
  t.decimal :price, :precision => 8, :scale => 2
  t.timestamps

create_table :categories do |t|
  t.string :name
  t.index :name, unique: true
  t.timestamps

create_table :article_categories do |t|
  t.integer :article_id
  t.integer :category_id
  t.timestamps


== CONTROLLERS - NEW/CREATE ==

========================



========================
AR BLOG - ENTRY/TAGS (JOIN)

== MODELS ==
class Entry < ApplicationRecord
  has_many :entry_tags
  has_many :tags, through: :entry_tags

class Tag < ApplicationRecord
  validates :tag_name, uniqueness: true
  has_many :entry_tags
  has_many :entries, through: :entry_tags

class EntryTag < ApplicationRecord
  belongs_to :entry
  belongs_to :tag

== MIGRATIONS ==
create_table :entries do |t|
  t.string :subject
  t.string :body
  t.timestamps

create_table :tags do |t|
  t.string :tag_name
  t.index :tag_name, unique: true
  t.timestamps

create_table :entry_tags do |t|
  t.integer :entry_id
  t.integer :tag_id
  t.timestamps
========================


========================
AR BLOG - ENTRY/TAGS (POLY)

== MODELS ==
class Entry < ApplicationRecord
  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings

class Tag < ApplicationRecord
  has_many :taggings
  has_many :entries, through: :taggings, source: :taggable, source_type: :Entry
  validates :tag_name, uniqueness: true

  def self.parse_tags(tags)
    tags.split(',').map do |tag|
      Tag.find_or_create_by(tag_name: tag.strip)
    end
  end

class Tagging < ApplicationRecord
  belongs_to :taggable, polymorphic: true
  belongs_to :tag

== MIGRATIONS ==
create_table :entries do |t|
  t.string :author
  t.string :title
  t.string :body
  t.timestamps

create_table :tags do |t|
  t.string :tag_name
  t.index :tag_name, unique: true
  t.timestamps

create_table :taggings do |t|
  t.references :tag, index: true
  t.references :taggable, polymorphic: true, index: true
  t.timestamps
========================


========================
HOTEL BOOKINGS - JK (JOIN)

== MODELS ==
class Booking < ApplicationRecord
  belongs_to :guest, class_name: "User", foreign_key: "guest_id"
  belongs_to :room
  has_one :hotel, through: :room

class Hotel < ApplicationRecord
  has_many :rooms
  has_many :bookings, through: :rooms
  has_many :booked_guests, through: :bookings, source: :guest

class Room < ApplicationRecord
  belongs_to :hotel
  has_many :bookings

class User < ApplicationRecord
  has_many :bookings, class_name: "Booking", foreign_key: "guest_id"
  has_many :booked_rooms, :through => :bookings, :source => :room
  has_many :booked_hotels, through: :bookings, source: :hotel

== MIGRATIONS ==
create_table :bookings do |t|
  t.integer :guest_id
  t.integer :room_id
  t.timestamps

create_table :hotels do |t|
  t.string :name
  t.timestamps

create_table :users do |t|
  t.string :name
  t.timestamps

create_table :rooms do |t|
  t.integer :rate
  t.integer :number
  t.integer :hotel_id
  t.timestamps
========================


========================
SDF MAXDIGITAL (POLY)

== MODELS ==
class Account < ApplicationRecord
  validates :act_num, uniqueness: true
  has_many :contacts
  # accepts_nested_attributes_for :contacts
  #######################
  has_one :addressing, as: :addressable
  has_one :address, through: :addressing
  has_many :phonings, as: :phonable
  has_many :phones, through: :phonings
  has_one :urling, as: :urlable
  has_one :url, through: :urling

class Address < ApplicationRecord
  validates :full, uniqueness: true
  has_many :addressings
  has_many :accounts, through: :addressings, source: :addressable, source_type: :Account

class Addressing < ApplicationRecord
  belongs_to :addressable, polymorphic: true
  belongs_to :address
  validates :address_id, :uniqueness => { :scope => [:addressable_type, :addressable_id] } #=> ALSO IN MIGRATION!

class Contact < ApplicationRecord
  belongs_to :account
  validates :full_name, presence: true, case_sensitive: false
  validates_uniqueness_of :cont_num, allow_blank: true, allow_nil: true
  validates_uniqueness_of :full_name, allow_blank: true, allow_nil: true, :scope => [:account_id, :full_name, :email, :job_title], case_sensitive: false
  has_many :phonings, as: :phonable
  has_many :phones, through: :phonings
  accepts_nested_attributes_for :phones, allow_destroy: true

class Phone < ApplicationRecord
  validates :phone, uniqueness: true
  has_many :phonings
  has_many :accounts, through: :phonings, source: :phonable, source_type: :Account
  has_many :contacts, through: :phonings, source: :phonable, source_type: :Contact

class Phoning < ApplicationRecord
  belongs_to :phonable, polymorphic: true
  belongs_to :phone
  validates :phone_id, :uniqueness => { :scope => [:phonable_type, :phonable_id] } #=> ALSO IN MIGRATION!

class Url < ApplicationRecord
  validates :url, uniqueness: true
  has_many :urlings
  has_many :accounts, through: :urlings, source: :urlable, source_type: :Account

class Urling < ApplicationRecord
  belongs_to :url
  belongs_to :urlable, polymorphic: true
  validates :url_id, :uniqueness => { :scope => [:urlable_type, :urlable_id] } #=> ALSO IN MIGRATION!

== MIGRATIONS ==
create_table :contacts do |t|
  t.references :account, foreign_key: true
  t.string :cont_num
  t.string :source
  t.string :status
  t.string :full_name
  t.string :first_name
  t.string :last_name
  t.string :email
  t.string :job_title
  t.timestamps
end
add_index :contacts, :cont_num, unique: true
add_index :contacts, [:account_id, :full_name, :email, :job_title], unique: true, name: 'contact_index' #=> And in Model!

create_table :accounts do |t|
  t.string :act_num
  t.string :source
  t.string :act_name
  t.string :status
  t.index :act_num, unique: true
  t.timestamps

create_table :addresses do |t|
  t.string :status
  t.string :street
  t.string :city
  t.string :state
  t.string :zip
  t.string :full
  t.string :pin
  t.index :full, unique: true
  t.timestamps

create_table :addressings do |t|
  t.references :address, index: true
  t.references :addressable, polymorphic: true, index: true
  t.timestamps
end
add_index :addressings, [:addressing_id, :addressable_type, :addressable_id], unique: true, name: 'addressings_index' #=> And in Model!

create_table :phones do |t|
  t.string :status
  t.string :phone
  t.index :phone, unique: true
  t.timestamps

create_table :phonings do |t|
  t.references :phone, index: true
  t.references :phonable, polymorphic: true, index: true
  t.timestamps
end
add_index :phonings, [:phone_id, :phonable_type, :phonable_id], unique: true, name: 'phonings_index' #=> And in Model!  #=> And in Model!

create_table :urls do |t|
  t.boolean :archive, default: false
  t.integer :redirects_to
  t.string :status
  t.string :url
  t.string :staff_page
  t.string :locations_page
  t.index :url, unique: true
  t.timestamps

create_table :urlings do |t|
  t.references :url, index: true
  t.references :urlable, polymorphic: true, index: true
  t.timestamps
end
add_index :urlings, [:url_id, :urlable_type, :urlable_id], unique: true, name: 'urlings_index' #=> And in Model!  #=> And in Model!
========================
