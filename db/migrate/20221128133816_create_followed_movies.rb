class CreateFollowedMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :followed_movies do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
